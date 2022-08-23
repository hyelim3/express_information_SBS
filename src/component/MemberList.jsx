import React from "react";
import MemberListItem from "./MemberListItem";

const MemberList = ({ members, onToggle, onRemove }) => {
  return (
    <tbody className="MemberList">
      {members.map((member, index) => (
        <MemberListItem
          member={member}
          key={index}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </tbody>
  );
};

export default MemberList;
