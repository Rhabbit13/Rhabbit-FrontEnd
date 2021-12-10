import { useSelector } from "react-redux";

const Permit = props => {
  const user_info = useSelector(state => state.user.user);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_login = sessionStorage.getItem(_session_key);
  const post_in_id = props.post_in_id;
  Permit.defaultProps = {
    post_in_id: user_info,
  };
  if (is_login && user_info) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
  return null;
};
export default Permit;
