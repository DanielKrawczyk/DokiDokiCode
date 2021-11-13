export default function Background( props: any ): any {
    return (
        <div className="background">
            <img src={`./Assets/Images/Story/${props.Image}.png`} alt="" />
        </div>
    )
}