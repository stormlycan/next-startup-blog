import SearchFrom from "@/components/SearchFrom";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUP_QUERY);

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
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length >0 ? (
            posts.map((post: StartUpTypeCard, index: number) => {
               return <StartupCard key={post._id} post={post} />
            })
          ): (
            <p className="no-results">No Startups are found</p>
          )}
        </ul>
      </section>
    </>
  );
}
