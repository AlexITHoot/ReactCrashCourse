import Card from "./ui/Card";


function ExchangeRate(props) {
    return (
        <div>
            {props.data.map((el) => (
                <Card key={el.r030}>
                    <div className="name">{el.txt} {el.cc}</div>
                    <div className="rate">{el.rate}</div>
                </Card>
            ))}
        </div>
    );
}

export default ExchangeRate;