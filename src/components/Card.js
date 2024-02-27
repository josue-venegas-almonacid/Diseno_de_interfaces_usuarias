export const Card = ({ children, ...props }) => {
  return(
    <div className="border border-usm-blue p-4 rounded-lg shadow-md">
      <div className="text-lg border-b-2 py-2">
        {props.title}
      </div>
      <div className="py-2">
        {props.content}
      </div>
    </div>
  )
}

