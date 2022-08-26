const ButtonBlop = ({ children, onClick, className, ...props }) => (
    <button className={className} {...props} onClick={onClick} >
        {children}
        <span className={`${className}__inner`}>
          <span className={`${className}__blobs`}>
            <span className={`${className}__blob`}/>
            <span className={`${className}__blob`}/>
            <span className={`${className}__blob`}/>
            <span className={`${className}__blob`}/>
          </span>
        </span>
    </button>
);

export default ButtonBlop;