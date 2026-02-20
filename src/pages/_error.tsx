function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div style={{ fontFamily: 'system-ui', textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
        {statusCode || 'Feil'}
      </h1>
      <p style={{ fontSize: '18px', color: '#666' }}>
        {statusCode === 404 ? 'Siden ble ikke funnet.' : 'En serverfeil oppstod.'}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: { res?: { statusCode: number }; err?: { statusCode: number } }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
