import { FormGroup } from "@angular/forms";

export const markFormGroupTouched = (formGroup: FormGroup) => {
    (Object as any).values(formGroup.controls).forEach((control: FormGroup) => {
        control.markAsTouched();

        if (control.controls) {
            markFormGroupTouched(control);
        }
    });
};


// Trim space all field
export const cleanForm = (formGroup: FormGroup) => {
    Object.keys(formGroup.controls).forEach((key) =>
            formGroup.get(key)?.setValue(formGroup.get(key)?.value?.trim())
        );
}
