import { useState } from "react"
import { TimelineContainer } from "./styled"
import { ChartComponent } from "@/components/Chart/Chart"
import { FormComponent } from "@/components/FormComponent/FormComponent"
import { Notification } from "@/components/Notification/Notification"
import { observable } from "@/services/observer"

export const Timeline = () => {
  const [formData, setFormData] = useState([])

  return (
    <TimelineContainer>
      <FormComponent onSubmit={setFormData} observable={observable} />
      <ChartComponent formData={formData} observable={observable} />
      <Notification observable={observable} />
    </TimelineContainer>
  )
}
