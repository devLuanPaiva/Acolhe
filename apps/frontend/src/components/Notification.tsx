'use client'

import React, { useState } from 'react'
import { Bell } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Notification {
  id: number
  title: string
  message: string
  date: string
  read: boolean
  type: 'match' | 'message' | 'system'
  patientId?: number
  status?: 'pending' | 'accepted' | 'declined'
}

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Novo interesse',
      message: 'José quer contratar os seus serviços. Clique para ver o perfil e decidir.',
      date: '2024-11-23T10:00:00',
      read: false,
      type: 'match',
      patientId: 123,
      status: 'pending'
    }
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ))
  }

  const handleAccept = (e: React.MouseEvent, notificationId: number) => {
    e.stopPropagation()
    setNotifications(notifications.map(notification =>
      notification.id === notificationId 
        ? { ...notification, status: 'accepted' as const } 
        : notification
    ))
  }

  const handleDecline = (e: React.MouseEvent, notificationId: number) => {
    e.stopPropagation()
    setNotifications(notifications.map(notification =>
      notification.id === notificationId 
        ? { ...notification, status: 'declined' as const } 
        : notification
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })))
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Agora'
    if (diffInHours < 24) return `${diffInHours}h atrás`
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d atrás`
  }

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'match':
        return '🤝'
      case 'message':
        return '💬'
      case 'system':
        return '🔔'
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Notificações</h3>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Marcar todas como lidas
            </Button>
          )}
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.length > 0 ? (
            <div className="divide-y">
              {notifications.map((notification) => (
                <Link 
                  href={notification.patientId ? `/pacientes/${notification.patientId}` : '#'}
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div
                    className={cn(
                      "p-4 hover:bg-gray-50 transition-colors",
                      !notification.read && "bg-blue-50"
                    )}
                  >
                    <div className="flex gap-3">
                      <span className="text-xl">{getNotificationIcon(notification.type)}</span>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium text-sm">{notification.title}</p>
                          <span className="text-xs text-gray-500">
                            {getTimeAgo(notification.date)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{notification.message}</p>
                        {notification.type === 'match' && notification.status === 'pending' && (
                          <div className="flex gap-2 mt-2">
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white"
                              onClick={(e) => handleAccept(e, notification.id)}
                            >
                              Aceitar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 border-red-600 hover:bg-red-50"
                              onClick={(e) => handleDecline(e, notification.id)}
                            >
                              Recusar
                            </Button>
                          </div>
                        )}
                        {notification.status === 'accepted' && (
                          <p className="text-sm text-green-600">Aceito ✓</p>
                        )}
                        {notification.status === 'declined' && (
                          <p className="text-sm text-red-600">Recusado ✗</p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              Nenhuma notificação
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
