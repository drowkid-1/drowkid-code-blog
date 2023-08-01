'use client';

export default function Footer({
  reactVersion,
  nextVersion,
}: {
  reactVersion: string;
  nextVersion: string;
}) {
  return (
    <div className="col-start-2 col-end-4 mt-28 flex items-center justify-between">
      <style jsx>
        {`
          .power-by {
            color: rgb(82 82 91);
            display: inline-flex;
            align-items: center;
          }
          .power-by-text {
            margin-right: 0.25rem;
          }
        `}
      </style>

      <span className="power-by">
        <span className="power-by-text">Powered by <a href="https://lalo.b-cdn.net">DrowKid</a></span>
      </span>

      <div className="flex gap-x-6 text-sm text-gray-600">
        <div>React: {reactVersion}</div>
        <div>Next: {nextVersion}</div>
      </div>
    </div>
  );
}
