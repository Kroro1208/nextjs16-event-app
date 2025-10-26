const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: #{id}</p>
    </div>
  );
};

export default UserDetails;
