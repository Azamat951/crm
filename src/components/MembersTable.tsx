import { Fragment, useState } from "react";
import { DeleteButton } from "./DeleteButton";
import { LogOutButton } from "./LogOutButton";
import { EditButton } from "./EditButton";
import { ExpandIcon } from "./Icons";
import { useMembersStore } from "@/features/members/MembersStore";
import { useMemberModal } from "@/features/members/UseMemberModal";

const MembersTable = () => {
  const { openEditModal } = useMemberModal();
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const { deleteMember, openMemberId, setMemberId, members, search } =
    useMembersStore();

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.phone.includes(search)
  );

  const paginatedMembers = filteredMembers.slice(start, end);
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full rounded-[20px] bg-[#343743] overflow-hidden">
      {/* Table Container with Horizontal Scroll on Mobile */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] table-auto md:table-fixed"> {/* Changed to table-auto + min-width */}
          {/* HEADER */}
          <thead className="bg-[#2a2d38] text-white sticky top-0 z-10">
            <tr>
              <th className="w-2/5 md:w-[20%] text-left px-4 md:px-6 py-4 text-sm font-medium">
                Name
              </th>
              <th className="hidden md:table-cell w-[20%] text-left px-6 py-4 text-sm font-medium">
                Phone
              </th>
              <th className="hidden md:table-cell w-[15%] text-left px-6 py-4 text-sm font-medium">
                Status
              </th>
              <th className="hidden md:table-cell w-[15%] text-left px-6 py-4 text-sm font-medium">
                Type
              </th>
              <th className="hidden md:table-cell w-[15%] text-left px-6 py-4 text-sm font-medium">
                Expire
              </th>
              <th className="w-[20%] md:w-[15%] text-left px-4 md:px-6 py-4 text-sm font-medium">
                Action
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="text-white divide-y divide-[#444858]">
            {paginatedMembers.map((member) => (
              <Fragment key={member.id}>
                {/* MAIN ROW */}
                <tr className="hover:bg-[#444858] transition-colors">
                  <td className="px-4 md:px-6 py-4 text-sm font-medium">
                    {member.name}
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 text-sm">
                    {member.phone}
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 text-sm">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-[10px] text-xs font-medium ${
                        member.status === "Available"
                          ? "bg-[#369B46]"
                          : "bg-[#BE2828]"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 text-sm">
                    {member.type}
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 text-sm">
                    {member.expire}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <LogOutButton onClick={() => console.log("logout")} />
                      <EditButton onClick={() => openEditModal(member)} />
                      <DeleteButton onClick={() => deleteMember(member.id)} />

                      {/* Mobile Expand Button */}
                      <button
                        className="md:hidden p-1"
                        onClick={() =>
                          setMemberId(
                            openMemberId === member.id ? null : member.id
                          )
                        }
                      >
                        <ExpandIcon />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* EXPANDED MOBILE DETAILS */}
                {openMemberId === member.id && (
                  <tr className="md:hidden bg-[#2a2d38]">
                    <td colSpan={6} className="px-4 py-5">
                      <div className="flex flex-col gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Phone</span>
                          <span>{member.phone}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Status</span>
                          <span
                            className={`px-3 py-1 rounded-[10px] text-xs font-medium ${
                              member.status === "Available"
                                ? "bg-[#369B46]"
                                : "bg-[#BE2828]"
                            }`}
                          >
                            {member.status}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Type</span>
                          <span>{member.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Expire</span>
                          <span>{member.expire}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION - Fixed at bottom, centered, better mobile spacing */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 py-6 border-t border-[#444858] bg-[#343743]">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 disabled:opacity-40 transition-colors"
          >
            ←
          </button>

          {pages.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm transition-colors ${
                page === p
                  ? "bg-purple-600 text-white"
                  : "bg-[#444858] hover:bg-[#555b6b] border border-white/20"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 disabled:opacity-40 transition-colors"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default MembersTable;