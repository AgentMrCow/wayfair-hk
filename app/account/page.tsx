"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Heart,
    Eye,
    Smartphone,
    Clock,
    Settings,
    LogOut,
    Edit,
    Trash2,
    Download,
    Share2,
    Bell,
    Lock,
    User,
    Sparkles,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState("saved-designs")

    // Mock user data
    const user = {
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        avatar: "/placeholder.svg?height=100&width=100",
        joinDate: "January 2023",
    }

    // Mock saved designs
    const savedDesigns = [
        {
            id: 1,
            title: "Modern Living Room Sofa",
            date: "2 days ago",
            image: "/placeholder.svg?height=400&width=600",
            likes: 24,
            views: 142,
        },
        {
            id: 2,
            title: "Minimalist Coffee Table",
            date: "1 week ago",
            image: "/placeholder.svg?height=400&width=600",
            likes: 18,
            views: 97,
        },
        {
            id: 3,
            title: "Scandinavian Bookshelf",
            date: "2 weeks ago",
            image: "/placeholder.svg?height=400&width=600",
            likes: 32,
            views: 215,
        },
        {
            id: 4,
            title: "Industrial Dining Set",
            date: "3 weeks ago",
            image: "/placeholder.svg?height=400&width=600",
            likes: 15,
            views: 83,
        },
    ]

    // Mock recent activity
    const recentActivity = [
        {
            id: 1,
            type: "design",
            action: "Created a new design",
            title: "Modern Living Room Sofa",
            date: "2 days ago",
        },
        {
            id: 2,
            type: "ar",
            action: "Used AR to visualize",
            title: "Minimalist Coffee Table",
            date: "1 week ago",
        },
        {
            id: 3,
            type: "like",
            action: "Liked a design",
            title: "Bohemian Accent Chair",
            date: "1 week ago",
        },
        {
            id: 4,
            type: "share",
            action: "Shared a design",
            title: "Industrial Dining Set",
            date: "3 weeks ago",
        },
    ]

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center mb-6">
                                <Avatar className="w-24 h-24 mb-4">
                                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <h2 className="text-xl font-bold">{user.name}</h2>
                                <p className="text-sm text-gray-500">{user.email}</p>
                                <p className="text-xs text-gray-400 mt-1">Member since {user.joinDate}</p>
                            </div>

                            <div className="space-y-1">
                                <Button
                                    variant={activeTab === "saved-designs" ? "default" : "ghost"}
                                    className={`w-full justify-start ${activeTab === "saved-designs" ? "bg-rose-600 hover:bg-rose-700" : ""
                                        }`}
                                    onClick={() => setActiveTab("saved-designs")}
                                >
                                    <Heart className="mr-2 h-4 w-4" />
                                    Saved Designs
                                </Button>
                                <Button
                                    variant={activeTab === "activity" ? "default" : "ghost"}
                                    className={`w-full justify-start ${activeTab === "activity" ? "bg-rose-600 hover:bg-rose-700" : ""
                                        }`}
                                    onClick={() => setActiveTab("activity")}
                                >
                                    <Clock className="mr-2 h-4 w-4" />
                                    Recent Activity
                                </Button>
                                <Button
                                    variant={activeTab === "profile" ? "default" : "ghost"}
                                    className={`w-full justify-start ${activeTab === "profile" ? "bg-rose-600 hover:bg-rose-700" : ""
                                        }`}
                                    onClick={() => setActiveTab("profile")}
                                >
                                    <User className="mr-2 h-4 w-4" />
                                    Profile Settings
                                </Button>
                                <Button
                                    variant={activeTab === "notifications" ? "default" : "ghost"}
                                    className={`w-full justify-start ${activeTab === "notifications" ? "bg-rose-600 hover:bg-rose-700" : ""
                                        }`}
                                    onClick={() => setActiveTab("notifications")}
                                >
                                    <Bell className="mr-2 h-4 w-4" />
                                    Notifications
                                </Button>
                                <Button
                                    variant={activeTab === "security" ? "default" : "ghost"}
                                    className={`w-full justify-start ${activeTab === "security" ? "bg-rose-600 hover:bg-rose-700" : ""
                                        }`}
                                    onClick={() => setActiveTab("security")}
                                >
                                    <Lock className="mr-2 h-4 w-4" />
                                    Security
                                </Button>
                            </div>

                            <div className="pt-6 mt-6 border-t">
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Sign Out
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="flex-grow">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsContent value="saved-designs" className="mt-0">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold">Saved Designs</h1>
                                <Button asChild className="bg-rose-600 hover:bg-rose-700">
                                    <Link href="/design">Create New Design</Link>
                                </Button>
                            </div>
                            {savedDesigns.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {savedDesigns.map((design) => (
                                        <Card key={design.id} className="overflow-hidden">
                                            <div className="relative h-48">
                                                <Image
                                                    src={design.image || "/placeholder.svg"}
                                                    alt={design.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                                <div className="absolute top-2 right-2">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                                                                <Settings className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem>
                                                                <Edit className="mr-2 h-4 w-4" />
                                                                Edit
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Smartphone className="mr-2 h-4 w-4" />
                                                                View in AR
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Share2 className="mr-2 h-4 w-4" />
                                                                Share
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Download className="mr-2 h-4 w-4" />
                                                                Download
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="text-red-600">
                                                                <Trash2 className="mr-2 h-4 w-4" />
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </div>
                                            <CardContent className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-medium">{design.title}</h3>
                                                    <span className="text-xs text-gray-500">{design.date}</span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <Heart className="h-4 w-4 mr-1" />
                                                    <span className="mr-4">{design.likes}</span>
                                                    <Eye className="h-4 w-4 mr-1" />
                                                    <span>{design.views}</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <Card className="p-8 text-center">
                                    <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-medium mb-2">No saved designs yet</h3>
                                    <p className="text-gray-600 mb-6">
                                        Start creating and saving your custom furniture designs to see them here.
                                    </p>
                                    <Button asChild className="bg-rose-600 hover:bg-rose-700">
                                        <Link href="/design">Create Your First Design</Link>
                                    </Button>
                                </Card>
                            )}
                        </TabsContent>

                        <TabsContent value="activity" className="mt-0">
                            <h1 className="text-2xl font-bold mb-6">Recent Activity</h1>
                            {recentActivity.length > 0 ? (
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="space-y-6">
                                            {recentActivity.map((activity) => (
                                                <div key={activity.id} className="flex items-start">
                                                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-4 flex-shrink-0">
                                                        {activity.type === "design" && <Sparkles className="h-5 w-5 text-rose-600" />}
                                                        {activity.type === "ar" && <Smartphone className="h-5 w-5 text-rose-600" />}
                                                        {activity.type === "like" && <Heart className="h-5 w-5 text-rose-600" />}
                                                        {activity.type === "share" && <Share2 className="h-5 w-5 text-rose-600" />}
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="font-medium">{activity.action}</p>
                                                        <p className="text-sm text-gray-600">{activity.title}</p>
                                                        <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ) : (
                                <Card className="p-8 text-center">
                                    <Clock className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-medium mb-2">No recent activity</h3>
                                    <p className="text-gray-600 mb-6">
                                        Your recent actions like creating designs, using AR, and saving favorites will appear here.
                                    </p>
                                    <Button asChild className="bg-rose-600 hover:bg-rose-700">
                                        <Link href="/design">Start Creating</Link>
                                    </Button>
                                </Card>
                            )}
                        </TabsContent>

                        <TabsContent value="profile" className="mt-0">
                            <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="md:w-1/3 flex flex-col items-center">
                                            <Avatar className="w-32 h-32 mb-4">
                                                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <Button variant="outline" size="sm" className="mb-2">
                                                Change Photo
                                            </Button>
                                            <p className="text-xs text-gray-500">JPG, GIF or PNG. 2MB max.</p>
                                        </div>
                                        <div className="md:w-2/3 space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">First Name</Label>
                                                    <Input id="firstName" defaultValue="Sarah" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">Last Name</Label>
                                                    <Input id="lastName" defaultValue="Johnson" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input id="email" type="email" defaultValue={user.email} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="bio">Bio</Label>
                                                <Textarea
                                                    id="bio"
                                                    placeholder="Tell us about yourself"
                                                    defaultValue="Interior design enthusiast with a passion for modern and minimalist aesthetics."
                                                    className="min-h-[100px]"
                                                />
                                            </div>
                                            <div className="pt-4">
                                                <Button className="bg-rose-600 hover:bg-rose-700">Save Changes</Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="notifications" className="mt-0">
                            <h1 className="text-2xl font-bold mb-6">Notification Settings</h1>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">New Design Features</p>
                                                        <p className="text-sm text-gray-600">
                                                            Get notified about new AI and AR features
                                                        </p>
                                                    </div>
                                                    <Switch defaultChecked />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">Design Inspiration</p>
                                                        <p className="text-sm text-gray-600">
                                                            Weekly inspiration based on your preferences
                                                        </p>
                                                    </div>
                                                    <Switch defaultChecked />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">Account Updates</p>
                                                        <p className="text-sm text-gray-600">
                                                            Important information about your account
                                                        </p>
                                                    </div>
                                                    <Switch defaultChecked />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-4 border-t">
                                            <h3 className="text-lg font-medium mb-4">Push Notifications</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">Design Comments</p>
                                                        <p className="text-sm text-gray-600">
                                                            When someone comments on your designs
                                                        </p>
                                                    </div>
                                                    <Switch defaultChecked />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">Design Likes</p>
                                                        <p className="text-sm text-gray-600">
                                                            When someone likes your designs
                                                        </p>
                                                    </div>
                                                    <Switch />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">AR Tips</p>
                                                        <p className="text-sm text-gray-600">
                                                            Helpful tips for using AR visualization
                                                        </p>
                                                    </div>
                                                    <Switch defaultChecked />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <Button className="bg-rose-600 hover:bg-rose-700">Save Preferences</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="security" className="mt-0">
                            <h1 className="text-2xl font-bold mb-6">Security Settings</h1>
                            <div className="space-y-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-medium mb-4">Change Password</h3>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="currentPassword">Current Password</Label>
                                                <Input id="currentPassword" type="password" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="newPassword">New Password</Label>
                                                <Input id="newPassword" type="password" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                                <Input id="confirmPassword" type="password" />
                                            </div>
                                            <Button className="bg-rose-600 hover:bg-rose-700">
                                                Update Password
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-medium mb-4">
                                            Two-Factor Authentication
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Add an extra layer of security to your account by enabling two-factor authentication.
                                        </p>
                                        <Button variant="outline">Enable Two-Factor Authentication</Button>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-medium mb-4">Connected Accounts</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                                        <svg
                                                            className="h-6 w-6 text-blue-600"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">Facebook</p>
                                                        <p className="text-sm text-gray-600">Connected</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Disconnect
                                                </Button>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                                        <svg
                                                            className="h-6 w-6 text-blue-400"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">Twitter</p>
                                                        <p className="text-sm text-gray-600">Not connected</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Connect
                                                </Button>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                                                        <svg
                                                            className="h-6 w-6 text-red-600"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-1.968 4.926-4.666 4.926-1.028 0-2.024-.33-2.859-.905a.75.75 0 0 1-.079-1.48 6.684 6.684 0 0 0 2.938.98c2.09 0 3.802-1.346 3.802-3.008 0-1.662-1.712-3.008-3.802-3.008-.668 0-1.29.181-1.833.483l.828-3.878 2.683.565a1.25 1.25 0 0 1 .014 2.498z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">YouTube</p>
                                                        <p className="text-sm text-gray-600">Not connected</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Connect
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </main>
    )
}
