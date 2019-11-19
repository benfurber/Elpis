import { validate } from "validate.js";

class FormValue {
  [key: string]: Validator[]
}

abstract class Validator {

  protected validateCfg = {};

  private message = '';

  private valid = true;

  constructor(private key: string) {}

  validate(value: any): string {
    const validated = validate(value, this.validateCfg);
    const valid = validated && validated[this.key] && validated[this.key][0];
    
    this.valid = valid!!;
    this.message = valid || '';

    return this.message;
  }

  get validateMessage(): string {
    return this.message;
  }

  get isValid(): boolean {
    return this.valid;
  }

  get attrName(): string {
    return this.key;
  }
}

class RequiredValidator extends Validator {

  constructor(attrName: string, errorMsg = 'is required') {
    super(attrName)
    this.validateCfg = {
      [attrName]: {
        presence: {
          message: errorMsg
        },
        length: {
          minimum: 1,
          tooShort: errorMsg
        }
      }
    };
  }
}

class FormValidator {

  public readonly form: FormValue = {};

  constructor(...validators: Validator[]) {
    validators.forEach(validator => {
      this.form[validator.attrName]
        ? this.form[validator.attrName].push(validator)
        : this.form[validator.attrName] = [validator];
    });
  }

  get(attrName: string): any {
    return this.form[attrName];
  }

  validate(attrName: string, value: any): string {
    return this.form[attrName].map(v => v.validate(value)).join('. ');
  }

  validateAll(value: any): { [key: string]: string } {
    const messages = {};
    for (const key in this.form) {
      if (this.form.hasOwnProperty(key)) {
        messages[key] = this.validate(key, value);
      }
    }
    return messages;
  }
}

export { FormValidator, RequiredValidator };