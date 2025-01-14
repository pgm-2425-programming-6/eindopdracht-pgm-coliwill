type Avatar = {
  [key: string]: React.ComponentType<any>; 
  avatar: React.ComponentType<any>;
  avatar2: React.ComponentType<any>;
  avatar3: React.ComponentType<any>;
};

const avatars: Avatar = {
  avatar: require("@assets/images/avatars/avatar.svg").default,
  avatar2: require("@assets/images/avatars/avatar2.svg").default,
  avatar3: require("@assets/images/avatars/avatar3.svg").default,
};

export default avatars;