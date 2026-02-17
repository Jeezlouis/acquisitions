export const formatValidation = (errors) => {
    if(!errors || !errors.length) return 'Validation failed';

    if(Array.isArray(errors.issues)) return errors.issues.map(issue => issue.message).join(', ');

    return JSON.stringify(errors);
}