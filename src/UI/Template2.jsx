import classes from './Template2.module.css'
function Template2(props) {
  return (
    <div className={classes.main}>{props.children}</div>
  )
}

export default Template2