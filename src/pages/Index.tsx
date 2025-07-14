
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Truck, Brain, TrendingUp, Users, Package, Zap, CheckCircle, AlertCircle, Star } from "lucide-react";
import { DeliveryScheduler } from "@/components/DeliveryScheduler";
import { TrackingDashboard } from "@/components/TrackingDashboard";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("schedule");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="p-3 bg-blue-600 rounded-2xl">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              SmartDeliver AI
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Intelligent delivery scheduling that learns from customer behavior, predicts optimal time windows, 
            and reduces missed deliveries by up to 85%
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered Predictions
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              85% Fewer Missed Deliveries
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Users className="h-4 w-4 mr-2" />
              Customer Satisfaction +40%
            </Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-2">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600">94.8%</div>
              <div className="text-sm text-gray-600">Successful Deliveries</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600">12 min</div>
              <div className="text-sm text-gray-600">Avg. Schedule Time</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-yellow-600">4.9/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-2">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600">2.3M+</div>
              <div className="text-sm text-gray-600">Packages Optimized</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Interface */}
        <Card className="border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Truck className="h-6 w-6" />
              Smart Delivery Management System
            </CardTitle>
            <CardDescription className="text-blue-100">
              Experience the future of delivery scheduling with AI-powered optimization
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="schedule" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Smart Scheduling
                </TabsTrigger>
                <TabsTrigger value="tracking" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Live Tracking
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="schedule">
                <DeliveryScheduler />
              </TabsContent>

              <TabsContent value="tracking">
                <TrackingDashboard />
              </TabsContent>

              <TabsContent value="analytics">
                <AnalyticsDashboard />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Delivery Operations?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join leading retailers who've reduced missed deliveries by 85% and increased customer satisfaction by 40% 
            with our AI-powered delivery scheduling system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
