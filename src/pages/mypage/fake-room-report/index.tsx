import MyPageHeader from '@common/header';

const FakeRoomReport = () => {
  return (
    <>
      <MyPageHeader type="fake-room-report" />
      <p style={{ textAlign: 'center', padding: '120px 0 400px', color: 'rgb(147, 147, 147)', fontSize: '16px' }}>
        허위매물 신고 내역이 없습니다.
      </p>
    </>
  );
};

export default FakeRoomReport;
