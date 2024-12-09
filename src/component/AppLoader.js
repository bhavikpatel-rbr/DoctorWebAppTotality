import React, { useEffect } from "react"
// import { Spinner } from "react-bootstrap"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { hideMessage, lemSelector } from "../reduxtool/lem/lemSlice"
import AppLoader from "../assest/img/totality_loader.png"

const Loader = () => {
    const dispatch = useDispatch()
    const state = useSelector(lemSelector)
    const { message, loading } = state
    useEffect(() => {
        if (message && message !== null && !loading) {
            const { message } = state
            const { type, messageText, duration, position, onCloseAction } = message
            const toastConfig = {
                position,
                autoClose: duration || false,
                onClose: () => {
                    dispatch(hideMessage())
                    if (onCloseAction) {
                        onCloseAction()
                    }
                },
            }
            switch (type) {
                case "error":
                    toast.error(messageText, toastConfig)
                    break

                case "success":
                    toast.success(messageText, toastConfig)
                    break

                default:
                    toast.info(messageText, toastConfig)
                    break
            }
        }
        const handleBeforeUnload = () => {
            dispatch(hideMessage())
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [dispatch, message])

    if (loading) {
        return (
            <div className="modal d-flex loader-l">
                <img src={AppLoader} alt="loader" className="loader-image" />
            </div>
        )
    }
    return null
}

export default Loader