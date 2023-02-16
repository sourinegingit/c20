import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
  ];
  const FILE_SIZE = 160 * 1024;
export const  basicSchema=yup.object().shape({
    email:yup.string().email("please entered valid email").required('required'),
    firstName:yup.string().min(3,'enter more than 3 charectore').required('required'),
    job:yup.string("please entered valid colabration field").required('required'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
    file:yup.mixed()
    .nullable()
    .notRequired()
    .test("FILE_SIZE", "Uploaded file is too big.", 
        value => !value || (value && value.size <= FILE_SIZE))
    .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
        value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
})  