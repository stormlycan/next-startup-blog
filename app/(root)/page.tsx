import SearchFrom from "@/components/SearchFrom";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and get notices in Virtual
          Compentitions.
        </p>

        <SearchFrom query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Search results for ${query}`: 'All Startups'}
        </p>

        <ul className="mx-7 card_grid">
          
        </ul>

      </section>

    </>
  );
}
