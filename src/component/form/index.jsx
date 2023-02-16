import {useFormik} from 'formik';
import Input from "../input";
import { basicSchema } from '../schemas';
import "./style.css";

const Form = () => {
const onSubmit=(values)=>{
    console.log(values)
};
    const formik=useFormik({
      initialValues:{
        firstName:'negin',
        email:'',
        job:'',
        phoneNumber:'',
        file:''
      },
      // validationSchema:basicSchema,
      onSubmit,
    });
    // console.log(formik.values)
// console.log(formik.errors);


  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="flex">
        <div className="column">
          <label>نام*</label>
          <Input type="text" placeholder="نام"
            value={formik.values.firstName}
            name='firstName'
            id="firstName"
            onChange={formik.handleChange}
            />
        </div>
        <div className="column">
            <label>ایمیل*</label>
          <Input   type="text" placeholder="ایمیل"
           value={formik.values.email}
           onChange={formik.handleChange}
           name='email'/>
          <p></p>
        </div>
      </div>

      <div className="flex">
        <div className="column">
          <label>موقعیت همکاری *</label>
          <Input type="text" placeholder="موقعیت همکاری مد نظر خودرا وارد کنید ..."
           onChange={formik.handleChange} value={formik.values.job} name='job'/>
        </div>
        <div className="column">
            <label>شماره تماس *</label>
          <Input type="number" placeholder="شماره تماس"
          onChange={formik.handleChange}
           value={formik.values.phoneNumber} name='phoneNumber'/>
        </div>
      </div>


      <div className="flex">
        <div className="column">
          <label>فایل رزومه با فرمت (png,jpg,pdf)*</label>
          <Input type="file"  value={formik.values.file} name='file'
          onChange={formik.handleChange}/>
        </div>
       
      </div>
      <button type='submit'> ارسال درخواست</button>
    </form>
  );
};
export default Form;
