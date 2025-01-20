import React from "react";
import { useQuery } from "@tanstack/react-query";
import HorizontalScroll from "@design/ScrollContainer/HorizontalScroll";
import { Text } from "react-native";
import { Profile } from "@/core/modules/profile/types";
import { getAllProfiles } from "@/core/modules/profile/api";
import { getAvatarImageUrl } from "@/core/modules/storage/utils";
import SmallAvatar from "@design/avatar/SmallAvatar";

const FriendListScrollView = () => {
  const { data: profiles, isLoading, error } = useQuery({
    queryKey: ["profiles"],
    queryFn: getAllProfiles,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading profiles!</Text>;
  }

  const friendList: Profile[] =
    profiles?.map((profile) => ({
      user_id: profile.user_id,
      username: profile.username,
      avatar: getAvatarImageUrl(profile.avatar),
      created_at: profile.created_at,
      id: profile.id,
    })) || [];

  return (
    <HorizontalScroll<Profile>
      data={friendList}
      renderItem={({ item }) => {
        
        return <SmallAvatar text={item.username} avatarUrl={item.avatar} />;
      }}
      keyExtractor={(item) => item.user_id}
    />
  );
};

export default FriendListScrollView;
