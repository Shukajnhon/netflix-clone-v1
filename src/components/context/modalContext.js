// import React, {createContext, useContext, useState} from "react";

// const modalContext = createContext();

// const ModalProvider = (props) => {
//   const [showModal, setShowModal] = useState(false);
//   const value = {showModal, setShowModal};

//   return <ModalProvider value={value} {...props}></ModalProvider>;
// };

// const useModal = () => {
//   const context = useContext(modalContext);

//   if (typeof context === "undefined")
//     throw new Error("useModal must be used within a ModalProvider");
// };

// export {ModalProvider, useModal};
