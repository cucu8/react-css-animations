import "./style.css";
import { CSSTransition } from 'react-transition-group';
import { Container, Button, Alert } from 'react-bootstrap';
import { useState, useRef } from "react";

const CssTransition = () => {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const nodeRef = useRef(null);
    return (
        <div>
            {showButton && (
                <button
                    onClick={() => setShowMessage(true)}
                >
                    Show Message
                </button>
            )}
            <CSSTransition
                in={showMessage}
                nodeRef={nodeRef}
                timeout={300}
                classNames="alert"
                unmountOnExit
                onEnter={() => setShowButton(true)}
                onExited={() => setShowButton(true)}
            >
                <Alert
                    ref={nodeRef}
                >
                    <p>
                        This alert message is being transitioned in and
                        out of the DOM.
                    </p>
                    <button
                        variant="primary"
                        onClick={() => setShowMessage(false)}
                    >
                        Close
                    </button>
                </Alert>
            </CSSTransition>
        </div>
    )
}

export default CssTransition;