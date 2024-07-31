"use client";

import { useEffect } from 'react'
import { useNavStore } from '../../store/useNavStore'

export const ScrollSpy = () => {
  const { setCurrentSection } = useNavStore()

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Section in view:', entry.target.id);
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [setCurrentSection])

  return null
}