import Link from "next/link"

export const Pagination = ({
  groupDir,
  prevId,
  prevTitle,
  nextId,
  nextTitle,
}: {
  groupDir: string
  prevId: string | null
  prevTitle: string | null
  nextId: string | null
  nextTitle: string | null
}) => {
  return (
    <div className="flex justify-between mt-8">
      {prevId ? (
        <Link href={`/${groupDir}/${prevId}`}>
          <a
            className="
              text-red-primary
              font-bold
              w-48
              p-4
              overflow-hidden
              whitespace-nowrap
              text-ellipsis
              text-center
              border-[1px]
              border-gray-200
              rounded-md
              transition-all
              ease-in-out
              duration-300
              hover:-translate-y-2
              hover:shadow-lg
              hover:shadow-gray-100
              md:w-60
              md:p-6
            "
          >
            Prev: {prevTitle === "Daily Challenges" ? "Top" : `${prevTitle}`}
          </a>
        </Link>
      ) : (
        <a></a>
      )}
      {nextId ? (
        <Link href={`/${groupDir}/${nextId}`}>
          <a
            className="
            text-red-primary
              font-bold
              w-48
              p-4
              overflow-hidden
              whitespace-nowrap
              text-ellipsis
              text-center
              border-[1px]
              border-gray-200
              rounded-md
              transition-all
              ease-in-out
              duration-300
              hover:-translate-y-2
              hover:shadow-lg
              hover:shadow-gray-100
              md:w-60
              md:p-6
            "
          >
            Next: {nextTitle}
          </a>
        </Link>
      ) : (
        <a></a>
      )}
    </div>
  )
}
