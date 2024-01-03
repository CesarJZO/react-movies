import { useEffect, useState } from "react";

export default function Pagination({
  currentPage,
  totalPages,
  ratio,
  onChange,
}: PaginationProps) {
  const [linksList, setLinksList] = useState<linkModel[]>([]);

  useEffect(() => {
    const previousPageEnabled = currentPage !== 1;
    const previousPage = currentPage - 1;
    const links: linkModel[] = [];

    links.push({
      page: previousPage,
      enabled: previousPageEnabled,
      text: "Previous",
      active: false,
    });

    for (let i = 1; i < totalPages; i++) {
      if (i >= currentPage - ratio && i <= currentPage + ratio) {
        links.push({
          page: i,
          enabled: true,
          text: i.toString(),
          active: i === currentPage,
        });
      }
    }

    const nextPageEnabled = currentPage !== totalPages && totalPages > 0;
    const nextPage = currentPage + 1;
    links.push({
      page: nextPage,
      enabled: nextPageEnabled,
      text: "Next",
      active: false,
    });

    setLinksList(links);
  }, [currentPage, totalPages, ratio]);

  const selectPage = (link: linkModel) => {
    if (link.page === currentPage) return;

    if (!link.enabled) return;

    onChange(link.page);
  }

  return (
    <nav>
      <ul>
        {linksList.map(link => (
          <li key={link.text}>
            <button
              onClick={() => selectPage(link)}
              disabled={!link.enabled}
              className={`btn ${link.active ? "btn-primary" : "btn-secondary"}`}
            >
              {link.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface linkModel {
  page: number;
  enabled: boolean;
  text: string;
  active: boolean;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  ratio: number;
  onChange: (page: number) => void;
}

Pagination.defaultProps = {
  ratio: 3,
};
