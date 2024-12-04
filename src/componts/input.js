export function CustomInput(props) {
    return (
    < div  >
        <label>
          {props.label}
          <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
    
          />
        </label>
      </div>
    )
}