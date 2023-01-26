import './Buttons.css'

const PrimaryButton = (props) => {
  return (
    <div>
        <a href='/#'>{props.children}</a>
    </div>
  )
}
const SecondaryButton = (props) => {
    return (
      <div> <a href='/#'>{props.children}</a></div>
    )
  }

export default PrimaryButton
export { SecondaryButton}