import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'

const ReviewGuide = () => {
  const hotelName = 'Roda Amwaj Suites Jumeirah Beach Residence'
  const bookingReviewLink =
    'https://www.booking.com/hotel/ae/amwaj-suites-jumeirah-beach-residence.en-gb.html?aid=311984&label=amwaj-suites-jumeirah-beach-residence-0klP9ypZDdbaGBjCyFtvzQSM226775915967%3Apl%3Ata%3Ap1%3Ap21%2C093%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-76546403136%3Alp9199074%3Ali%3Adem%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXwxhKG0pUU-mcMVT-JwQpc&sid=91bed3a072660b07c78a359653e03f91&dest_id=-782831&dest_type=city&group_adults=2&hapos=1&hpos=1&no_rooms=1&req_adults=2&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1728246745&srpvid=faf39065c22905c8&type=total&ucfs=1&wrlogin=1&tab=4&auth_success=1&account_created=1#tab-main' // Replace with your actual Booking.com review link

  return (
    <Container className='mt-5'>
      <Row className='text-center'>
        <h1 className='mb-4'>We Value Your Feedback!</h1>
        <p className='lead'>
          Stayed at <strong>{hotelName}</strong>? We’d love to hear about your
          experience!
        </p>
        <p className='mb-4'>
          Leave a review and receive a <strong>5% discount</strong> on your next
          booking with us!
        </p>
        <p className='mb-4'>
          Please take a moment to share your thoughts and help future travelers
          by leaving a review on Booking.com.
        </p>
        <Button
          href={bookingReviewLink}
          target='_blank'
          className='btn btn-primary btn-lg'
        >
          Leave a Review for {hotelName} & Get 5% Discount
        </Button>
      </Row>
    </Container>
  )
}

export default ReviewGuide
