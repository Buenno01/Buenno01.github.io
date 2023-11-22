export const getGithubUser = async (user: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    if (!response.ok) { throw new Error('Could not fetch the api!'); }
    const data = await response.json();

    const { bio, email, avatar_url: avatar, html_url: githubProfile,
      name, repos_url: reposUrl }: any = data;

    const formattedData: object = {
      bio,
      email,
      avatar,
      githubProfile,
      name,
      repos: await getAllRepos(reposUrl),
    };

    return formattedData;
  } catch (error: any) {
    console.log(error.message);
  }
};

const getAllRepos = async (reposUrl: string) => {
  try {
    const response = await fetch(reposUrl);
    if (!response.ok) { throw new Error('Could not find the repos'); }
    const data = await response.json();
    const formattedData = data.map((repo: any) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      watchers: repo.watchers,
      deployments: repo.deployments_url,
    }));
    return formattedData;
  } catch (error: any) {
    console.log(error.message);
  }
};
