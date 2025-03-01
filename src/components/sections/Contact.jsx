import Rating from '@mui/material/Rating';

const Contact = () => {
  return (
    <div className='min-h-screen bg-slate-50 w-full flex items-center justify-center dark:bg-slate-800'>
      <div className='flex justify-around w-full mt-10'>
        {/* First Testimonial */}
        <div className='text-center text-sm'>
          <div className='flex justify-center'>
            <img src='https://i.ibb.co/KxpLCxYY/073283df5eb03f8788573ed232dd447cd632de22e001cd0590d3407f6e313416-api-Key-57ce9dd418304f6392e54924fd1.png' alt='' className='rounded-full w-[200px] h-[200px]' />
          </div><br />
          <p className='text-gray-500 font-medium dark:text-white'>
            Slate helps you see how many more days <br />
            you need to work to reach your financial <br />
            goal for the month and year.
          </p>
          <br />
          <div className='text-sm'>
            <Rating name="half-rating" defaultValue={4.0} precision={4.0} />
          </div>
          <div>
            <b className='dark:text-white'>Regina Miles</b>
            <br />
            <b className='text-gray-500 dark:text-white'>Designer</b>
          </div>
        </div>

        {/* Second Testimonial */}
        <div className='text-center text-sm'>
          <div className='flex justify-center rounded-full object-cover'>
            <img src='https://i.ibb.co/FkDYfSn9/efeecd99341595e51c9d9201d71eacc29529c5e1eee1275b9209a007e6705f98-api-Key-57ce9dd418304f6392e54924fd1.png' alt='' className='rounded-full w-[230px] h-[230px]' />
          </div><br />
          <p className='text-gray-500 font-medium dark:text-white'>
            Slate helps you see how many more days <br />
            you need to work to reach your financial <br />
            goal for the month and year.
          </p>
          <br />
          <div className='text-sm'>
            <Rating name="half-rating" defaultValue={4.0} precision={4.0} />
          </div>
          <div>
            <b className='dark:text-white'>Regina Miles</b>
            <br />
            <b className='text-gray-500 dark:text-white'>Designer</b>
          </div>
        </div>

        {/* Third Testimonial */}
        <div className='text-center text-sm'>
          <div className='flex justify-center'>
            <img src='https://i.ibb.co/Y7YfZnf0/2daae5243511c7f02f83db3c978b95f98b281499e098af82ecc647a803ebfdad-api-Key-57ce9dd418304f6392e54924fd1.png' alt='' className='rounded-full w-[230px] h-[230px]' />
          </div><br />
          <p className='text-gray-500 font-medium dark:text-white'>
            Slate helps you see how many more days <br />
            you need to work to reach your financial <br />
            goal for the month and year.
          </p>
          <br />
          <div className='text-sm'>
            <Rating name="half-rating" defaultValue={4.0} precision={4.0} />
          </div>
          <div>
            <b className='dark:text-white'>Regina Miles</b>
            <br />
            <b className='text-gray-500 dark:text-white'>Designer</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
