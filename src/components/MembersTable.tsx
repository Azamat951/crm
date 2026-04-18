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
    <div className="w-full rounded-[20px] relative">
      <table className="w-full table-fixed">
        {/* HEADER */}
        <thead className="bg-[#343743] text-white">
          <tr>
            <th className="w-[20%] text-left px-6 py-3 text-sm font-medium">
              Name
            </th>

            <th className="w-[20%] hidden md:table-cell text-left px-6 py-3 text-sm font-medium">
              Phone
            </th>

            <th className="w-[15%] hidden md:table-cell text-left px-6 py-3 text-sm font-medium">
              Status
            </th>

            <th className="w-[15%] hidden md:table-cell text-left px-6 py-3 text-sm font-medium">
              Type
            </th>

            <th className="w-[15%] hidden md:table-cell text-left px-6 py-3 text-sm font-medium">
              Expire
            </th>

            <th className="w-[15%] text-left px-6 py-3 text-sm font-medium">
              Action
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-[#343743] text-white">
          {paginatedMembers.map((member) => (
            <Fragment key={member.id}>
              {/* MAIN ROW */}
              <tr className="hover:bg-[#444858] duration-500">
                <td className="px-6 py-4 text-sm">{member.name}</td>

                <td className="hidden md:table-cell px-6 py-4 text-sm">
                  {member.phone}
                </td>

                <td className="hidden md:table-cell px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-[10px] py-[5px] rounded-[10px] text-white text-sm w-fit ${
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

                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2 items-center">
                    <LogOutButton onClick={() => console.log("logout")} />
                    <EditButton onClick={() => openEditModal(member)} />
                    <DeleteButton onClick={() => deleteMember(member.id)} />

                    {/* MOBILE EXPAND BUTTON */}
                    <button
                      className="md:hidden"
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

              {/* EXPANDED ROW (MOBILE ONLY) */}
              {openMemberId === member.id && (
                <tr className="md:hidden">
                  <td colSpan={6} className="bg-[#343743]">
                    <div className="px-6 py-4 flex flex-col gap-3 text-sm text-white">

                      <div className="flex justify-between">
                        <span className="text-gray-400">Phone</span>
                        <span>{member.phone}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Status</span>
                        <span
                          className={`px-[10px] py-[5px] rounded-[10px] text-white text-sm ${
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

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-2 mt-4 bottom-0 right-2 absolute">
        <div
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="w-8 h-8 flex items-center justify-center rounded-full text-white border border-white bg-gray-500 cursor-pointer"
        >
          {"<"}
        </div>

        {pages.map((p) => (
          <div
            key={p}
            onClick={() => setPage(p)}
            className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-white ${
              page === p
                ? "bg-purple-500"
                : "bg-gray-600 border border-white"
            }`}
          >
            {p}
          </div>
        ))}

        <div
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className="w-8 h-8 flex items-center justify-center rounded-full text-white border border-white bg-gray-500 cursor-pointer"
        >
          {">"}
        </div>
      </div>

      <div className="h-[50px]" />
    </div>
  );
};

export default MembersTable;