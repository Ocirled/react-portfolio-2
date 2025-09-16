import React from 'react'
import Paragraph from '../Elements/Paragraph'
import Organization from '../Fragments/Organization'
import Header from '../Elements/Header'

const OrganizationLayout = () => {
  return (
    <div className='mt-18'>
      <Header classname='text-right'>organizations</Header>
      <Paragraph classname='text-right'>
        of course. I grow through communities-organizing, learning, and building
        together.
      </Paragraph>
      <div className=''>
        <Organization
          img='logo_kmb.png'
          title='Keluarga Mahasiswa Buddhis USU'
          date='2024 - Now'
        >
          <Paragraph>
            📝event coordinator, led the planning and execution of the new
            students recruitment event for KMB-USU 2025.
          </Paragraph>
          <Paragraph>
            📝timekeeper, ensuring that all segments of the event followed the
            planned of schedule smoothly and efficiently.
          </Paragraph>
          <Paragraph>
            📝served as volunteer during a free social service, managed crowd
            control and maintain a calm environment.
          </Paragraph>
        </Organization>
        <Organization
          img='logo_flourishing.jpg'
          title='Flourishing Festival 2025'
          date='2025 - Now'
        >
          <Paragraph>
            📝designed and implemented the online registration system via Google
            Forms.
          </Paragraph>
          <Paragraph>
            📝processed and mapped registration data into an organized printable
            layout.
          </Paragraph>
          <Paragraph>
            📝managed on-site registration desk, recording participant names in
            Mandarin.
          </Paragraph>
        </Organization>
      </div>
    </div>
  )
}

export default OrganizationLayout
