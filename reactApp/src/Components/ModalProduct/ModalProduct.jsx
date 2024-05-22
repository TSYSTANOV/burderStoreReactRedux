
import styles from "./Modal.module.css";


function ModalProduct() {

    return ( <></>
      // <div className={styles.modal}>
      //   <div className={styles.modal__card}>
      //     <div className={styles["modal__card-title"]}>
      //       <h2>{activeProduct.title}</h2>
      //     </div>
      //     <div className={styles.modal__card_information}>
      //       <div className={styles.modal_image}>
      //         <img
      //           src={`${API_URI}/${activeProduct.image}`}
      //           alt={activeProduct.category}
      //         />
      //       </div>
      //       <div className={styles["modal__card-content"]}>
      //         <p className={styles["modal__card-content_first"]}>
      //           {activeProduct.description}
      //         </p>
      //         <span className={styles["modal__card-content-inset"]}>
      //           Состав:
      //         </span>
      //         <ul>
      //           {activeProduct.ingredients.map((el) => {
      //             return <li key={el}>{el}</li>;
      //           })}
      //         </ul>
      //         <span className={styles["modal__card-content-outset"]}>
      //           {activeProduct.weight}г, ккал {activeProduct.calories}
      //         </span>
      //       </div>
      //       <div className={styles.modal__footer_info}>
      //         <div className={styles["modal__card-footer"]}>
      //           <button
      //             className={styles["modal__card-footer_button"]}
      //             onClick={() => {
      //               handleAddToCart(activeProduct.id);
      //             }}
      //             disabled={isAddToCart.inCart}
      //           >
      //             {isAddToCart.inCart ? isAddToCart.textAfterAdded : "Добавить"}
      //           </button>
      //           {!isAddToCart.inCart ? (
      //             <div className={styles.modal__card_number}>
      //               <button
      //                 className={styles.minus_number}
      //                 disabled={count === 1}
      //                 onClick={() => {
      //                   setCount(count - 1);
      //                 }}
      //               >
      //                 -
      //               </button>
      //               <p>{count}</p>
      //               <button
      //                 className={styles.plus_number}
      //                 onClick={() => {
      //                   setCount(count + 1);
      //                 }}
      //               >
      //                 +
      //               </button>
      //             </div>
      //           ) : (
      //             ""
      //           )}
      //         </div>
      //         {!isAddToCart.inCart ? (
      //           <div className={styles["modal__card-summary"]}>
      //             Сумма:
      //             <p>
      //               {activeProduct.price * count}
      //               <span>₽</span>
      //             </p>
      //           </div>
      //         ) : (
      //           ""
      //         )}
      //       </div>
      //     </div>
      //     <button className={styles["modal-close"]} onClick={closeModal}>
      //       <svg
      //         width="24"
      //         height="24"
      //         viewBox="0 0 24 24"
      //         fill="currentcolor"
      //         xmlns="http://www.w3.org/2000/svg"
      //       >
      //         <rect
      //           x="5.07422"
      //           y="5.28249"
      //           width="1"
      //           height="20"
      //           transform="rotate(-45 5.07422 5.28249)"
      //         />
      //         <rect
      //           x="5.78125"
      //           y="19.4246"
      //           width="1"
      //           height="20"
      //           transform="rotate(-135 5.78125 19.4246)"
      //         />
      //       </svg>
      //     </button>
      //   </div>
      // </div>
    );

}
export { ModalProduct };
