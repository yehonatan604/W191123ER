export type User = {
    name: string;
    age: number,
    email: string;
}

type CardProps = {
    user: User;
}

const Card = (props: CardProps) => {
    return (
        <div>
            <p>name: {props.user.name}</p>
            <p>age: {props.user.age}</p>
            <p>email: {props.user.email}</p>
        </div>
    )
}

export default Card;