import './fab-button.style.css'

export function FabButton({ children }) {
    return (
        <button className='fab'>
            {children}
        </button>
    )
}