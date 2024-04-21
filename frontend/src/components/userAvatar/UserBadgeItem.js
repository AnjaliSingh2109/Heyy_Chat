import { Badge } from "@chakra-ui/layout";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
  
    <Badge px={2} py={1} borderRadius="lg" m={1} mb={2} variant="solid" fontSize={12} bg='#e8bde8' cursor="pointer" onClick={handleFunction}>
      {user.name}
      {admin === user._id && <span> (Admin)</span>}
    </Badge>
  
  );
};

export default UserBadgeItem;
