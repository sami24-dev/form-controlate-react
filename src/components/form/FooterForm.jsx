
function FooterForm() {
  return (
    <footer className='footer'>
        <button className='form__button' type='submit'>Sign Up</button>
        <div className='footer__divide'>
          <p className='footer__divideLink'><a href="#">Did you forget your password?</a></p>
          <h4>Reset password</h4>
        </div>
        <h2 className='footer__end'><a href='#' >Login</a></h2>
    </footer>
  )
}

export default FooterForm