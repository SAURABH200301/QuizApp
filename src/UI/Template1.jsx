import classes from './Template1.module.css'

function Template1(prop) {
  return (
    <div className={classes.main}>{prop.children}</div>
  )
}

export default Template1