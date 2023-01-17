import React from 'react';
import Text from '@components/Text';
import Container from '@components/Container';
import Button from '@components/Button';
import ZStack from '@components/ZStack';
import SplashScreenBg from '@assets/img/SplashScreenBg.svg';
import Avatar from '@components/Avatar';

type SplashScreenComponentProps = {
  t: any;
};

const SplashScreenComponent = ({ t }: SplashScreenComponentProps) => {
  return (
    <ZStack>
      <Container center>
        <SplashScreenBg />
      </Container>
      <Container center>
        <Avatar
          style={{ top: 50 }}
          uri="https://s3-alpha-sig.figma.com/img/f90e/73c7/a0efe40bb694adcebde737c40ec33ec7?Expires=1675036800&Signature=pX27my5MQfAObZb2srzzbWwCsGXGpP-h-Xe8tx5rg~FPzXlTJ5aY-Mk~DGYhrJ4f-CDSvundLpCUUnK8EBVGG4bvn4nEmaAjwJIiEtWUqxe63~c-b96GR-3T28-7oU3Szy0BuHLYLzOXQr0FvVQ8KDcEMnp~qIspTesdCrcqM~9VhoFzGTf-VOXbfFQkcv~mfwQINbC4-htc-RON~S6ESQhKgKtZGdb~ljOtIHGEx762vcePnBZfTBmNiJgcyqHblq~p7qYaswouua6oJdWYyw6Vhg-6uwBrxG4b9b9pNufhafS8UNFIiLOk-ZLLnDBlToMSXo378dyWnWlst4KWmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Avatar
          style={{ marginLeft: 200 }}
          uri="https://s3-alpha-sig.figma.com/img/90f3/89dc/9f44c01c054f7695644cbed9a084f929?Expires=1675036800&Signature=ITd8c41piuJaH85xRHhVT0B663zA3AzrY8~FnZ2zHOX9YqUyRtuzHGHKwfkdzPbU1LLsfQDF0sH4LzlPDeDdZ8gZ5iqbbb9hAfDVTRWTsy7Rwo4uQr~KNEiK5apxqApj0dqjxfZcpMOGxdxKDYg3C-lSQP9JrAGhqu8ckNTC32LQ~qrvANeFZHQeKsdyL2SgUmt2~SXdbm6u9JXA~DW5ANdX9TlT2dEdfFPszxEZDE-mLzW2Tgx~qbJqdSkeeYtUZzK2Kxv6SgWNaSsDK-b~OiQvSyLQfZEqAwM3phhB2fNjSpNjtBU12G2gKzViDj1zFOLw36~LkdZGbpYRs-6J4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Avatar
          style={{ left: 20, top: -20, width: 80, height: 80 }}
          uri="https://s3-alpha-sig.figma.com/img/1dff/dcff/605754d155ad915f2d1a466ca1079ee9?Expires=1675036800&Signature=Ftazs1e~TdAepxQmoDQMXssaqCHi~11XBVG9WXTsq-o73QhwVDymvEaX8rTTMcIRVbwZv9f5TvfPepbVkjj7fArgNkFjzAtEm5Kg0VV~A3Xn~PWnp5rPD3CPkG3-pFgmSPqSERN-rR3BVpa-lYYukhPDUWQqqFk-7IbdjD1INpshoVlp2pXsHr9Jg-V0VG7GE5GQK37LTyX6Qh8Fk1kEO9SBRP8JUfz3d7Nv4Uax-8pxnf0xdGA2wsjwUGJsxdlupEVRekg4YQeB-Gcg7XtmxWPTHt0zDcTvOUAANHv5YJZ6SG5PNy8xxYqzqsZA4fQJ7RUt9jOf1eY93-FppbGeVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Avatar
          style={{ left: 120, top: -50 }}
          uri="https://s3-alpha-sig.figma.com/img/4398/0e2f/c868c26480e927340880fca6c97a85c4?Expires=1675036800&Signature=WfXaaDD~50kyTIH0ML70eYaI8XdP30LGCwFYmvDpS4wOvNDeaL3VhVXd0qZWfOzV1nIkxluq~7twY6fK9S97-yvmgeJEEciGF6GWQkRDK6IqS101v2GBoJl-mpNqETdOnH9pdsqtZqjpipcrEHXViVB8IBC6qFWdvsR3iz1jqX9Tsft~zRtJpTWVUsVoeevEiD3yUIGrG55l4GfqGN8DRe8ll6027kn8PG8ygN4-NV0sFS9qKOV~2-dCa2BR7kWHr2NAqmPEO-qJ1z8LEDPY~dLBJ82j6CoZfubKYbTjvq-Iw3SfkGCpBexPRcAZPQXgRfCDQRdRbriwwZqMbhbVaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Avatar
          style={{ top: -100 }}
          uri="https://s3-alpha-sig.figma.com/img/13b3/7d31/81e88998e35ec84dad5e7201a60b79eb?Expires=1675036800&Signature=Nv0IB~fiNqycnI5CA4mQ7xEoTJsZlAi2exGrlJuiLCyQ1o6weOnb3EHoM6QMm5w44-Liv0-3WLq10y3y3vM2ygPCVVd-9Jv80aucf4fKOIyIatJUlySxYgXCiSgo~7WMP71d7xUWuCUSzAwCsphvMBvV4psy1sDry6lSiHwLr8U0LQ1QlzOxpv18XMzt4R8ZzAzfnBrt9QQQGJZl0gVJUnlQeXv3KV0KtLM01g15BvLB2cmL955hvYgz0gIlxyvjI2gl5TQDC7Rq56BqtiLgxyy1~Kef55ROJHVTZC-wgioClaD8RJ7L9pZ9GgVdu8FOcBQI3jsZrlOyMH3GWaixwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </Container>
      <Container>
        <Text mla primary semiBold>
          {t('login')}
        </Text>
        <Text mva h2 semiBold>
          {t('splashScreenTitle')}
        </Text>
        <Button center>
          <Text semiBold white>
            {t('signUp')}
          </Text>
        </Button>
      </Container>
    </ZStack>
  );
};

export default SplashScreenComponent;
