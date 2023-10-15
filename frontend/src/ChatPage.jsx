import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from 'prop-types';
const ChatsPage = (props) => {
    ChatsPage.propTypes = {
        user: PropTypes.shape({
          username: PropTypes.string,
          secret: PropTypes.string,
        }).isRequired,
      };
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='0f5fcb96-076c-4e05-a737-324fbd9a330f'
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;