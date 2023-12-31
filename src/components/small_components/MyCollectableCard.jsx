/** 
    generate authorised collectable list using a drop-down list
    End point: '\currentAuthorisedCollectable
    Request: 'GET'
    Response: JSON Array (collectableName, collectableSet)
    create collectable form, set and name should be a drop-down list
    End point: '\collectableExchangeCreate'
    Request: 'POST'
    Body: collectableName, collectableSet, price, sellingOrBuying, collectableImage, priority, visibility=True
    click your list button to go to your list

    generate current my list
    End point: '\myCollectableExchange
    Request: 'GET'
    Response: JSON Array (exchangeId, collectableName, collectableSet, price, sellingOrBuying, updateDate, collectableImage)
    edit my current exchange
    End point: '\myCollectableExchange\edit
    Request: 'POST'
    Body: exchangeId, collectableName, collectableSet, price, sellingOrBuying, collectableImage, priority, visibility
*/

function MyCollectableCard({ exchange, onEditClick, onToggleClick }) {
    let colour = {
        backgroundColor:
            exchange.sellingOrBuying === "SELLING" ? "#2c2c85" : "#2c855c",
    };
    return (
        <div className="my-collectable-card" style={colour}>
            <div className="my-collectable-card-1">
                <div className="my-collectable-card-image-container">
                    <img
                        src={`http://localhost:8080/images/${exchange.collectableImage}`}
                        alt="item image"
                    ></img>
                </div>

                <h3 className="my-collectable-card-name-and-set">
                    {`${exchange.collectableName} from ${exchange.collectableSet}`}
                </h3>
            </div>

            <div className="my-collectable-card-2">
                <p className="my-collectable-card-price">{`Price:  AU$${exchange.price}`}</p>
                <p className="my-collectable-card-selling-or-buying">
                    {`Selling or Buying: ${exchange.sellingOrBuying}`}
                </p>
                <p>{exchange.visibility ? "Currently For Sale" : "Currently Off Market"}</p>
            </div>

            <div className="my-collectable-card-3">
                <button
                    className="my-collectable-card-edit-btn"
                    onClick={() => onEditClick(exchange)}
                >
                    Edit
                </button>
                <button
                    className="my-collectable-card-toggle-btn"
                    onClick={() => onToggleClick(exchange)}
                >
                    {exchange.visibility ? "Unlist Item" : "List Item"}
                </button>
            </div>
        </div>
    );
}

export default MyCollectableCard;
