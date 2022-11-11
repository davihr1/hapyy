import './Test.css';
interface Props {
    text: string;
    url: string;
}

export function Evolut(props: Props) {
    return (
        <div className="App" >
            <img src={props.url}
                alt="nlw-sports" className="rounded w-80 h-40" />

            <div>
                <h1 className="text-primary-100 text-sm mt-4 ml-2" >{props.text}</h1>
            </div>
        </div>
    );
}