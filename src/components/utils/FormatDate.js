const FormatDate = props => {
  const year = props.slice(0,4)
  const month = props.slice(5,7)
  const day = props.slice(8,10)
  const time = props.slice(11,19)

  const formattedDate = day + "/" + month + "/" + year + " " + time + "hs"

  return formattedDate

}

export default FormatDate