import { connect } from 'react-redux'
import Dashboard from "./Dashboard";
import { GetChallenges } from '../../redux/actions/challengesActions'


const mapStateToProps = (state) => {
    return {
        received: state.challenges.received,
        sent: state.challenges.sent,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getChallenges: () => {
            dispatch(GetChallenges());
        },
    };
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;