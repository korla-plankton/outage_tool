import Status from './Status'

const CommunityStatus = (props) => {
    const community = props.community;
    const compState = props.state;
    return (
        <div>
            <Status service="GSM" state={compState}/>
            <Status service="LTE" state={compState}/>
            <Status service="Management" state={compState}/>
            {community}

        </div>
    )
}

export default CommunityStatus
