import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowRight, TrendingUp, Building2, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Insights = () => {
  const featuredArticle = {
    title: "Texas Commercial Real Estate Market Outlook 2024",
    excerpt: "A comprehensive analysis of market trends, investment opportunities, and economic factors shaping the Texas commercial real estate landscape.",
    author: "Zachary Russell",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Market Analysis",
    image: "/placeholder.svg"
  };

  const articles = [
    {
      title: "5 Key Metrics Every Property Owner Should Track",
      excerpt: "Understanding these essential performance indicators can help you maximize your property's value and identify optimization opportunities.",
      author: "Ethaniel Vu",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Property Management"
    },
    {
      title: "The Rise of Mixed-Use Developments in Texas",
      excerpt: "How mixed-use properties are reshaping urban landscapes and creating new investment opportunities for commercial real estate investors.",
      author: "Zachary Russell",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Investment Strategy"
    },
    {
      title: "Tax Benefits of Commercial Real Estate Ownership",
      excerpt: "A detailed guide to depreciation, 1031 exchanges, and other tax strategies that can significantly impact your investment returns.",
      author: "Ethaniel Vu",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Tax Strategy"
    },
    {
      title: "ESG Investing in Commercial Real Estate",
      excerpt: "How environmental, social, and governance factors are becoming crucial considerations for modern commercial real estate investments.",
      author: "Zachary Russell",
      date: "February 22, 2024",
      readTime: "9 min read",
      category: "Investment Strategy"
    },
    {
      title: "Lease Negotiation Strategies for Maximum ROI",
      excerpt: "Essential tactics and considerations for structuring leases that protect your interests while attracting quality tenants.",
      author: "Ethaniel Vu",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Leasing"
    },
    {
      title: "Technology's Impact on Property Management",
      excerpt: "How PropTech solutions are revolutionizing commercial real estate management and creating new efficiencies for property owners.",
      author: "Zachary Russell",
      date: "February 8, 2024",
      readTime: "5 min read",
      category: "Technology"
    }
  ];

  const categories = [
    { name: "Market Analysis", count: 12, icon: TrendingUp },
    { name: "Investment Strategy", count: 18, icon: DollarSign },
    { name: "Property Management", count: 15, icon: Building2 },
    { name: "Tax Strategy", count: 8, icon: Calendar },
    { name: "Technology", count: 6, icon: ArrowRight },
    { name: "Leasing", count: 10, icon: User }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Real Estate Insights & Articles | AxisPoint Partners</title>
        <meta 
          name="description" 
          content="Expert insights, market analysis, and investment strategies for commercial real estate. Stay informed with AxisPoint Partners' latest articles and market updates." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-axis">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Market Insights
              </h1>
              <p className="text-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stay ahead of market trends with expert analysis, investment strategies, and actionable insights from our commercial real estate professionals.
              </p>
              <Button size="lg" className="btn-institutional">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="text-center mb-12">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Featured Article
              </h2>
            </div>

            <Card className="card-institutional max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="secondary">{featuredArticle.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredArticle.date}
                    </div>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-display text-2xl md:text-3xl text-primary mb-4">
                  {featuredArticle.title}
                </CardTitle>
                <CardDescription className="text-body text-lg">
                  {featuredArticle.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="btn-institutional">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding bg-accent/5">
          <div className="container-axis">
            <div className="text-center mb-12">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Browse by Category
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <Card key={index} className="card-institutional text-center cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <category.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-display font-semibold text-primary mb-1 text-sm">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.count} articles
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="text-center mb-12">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Recent Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="card-institutional h-full">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-display text-lg text-primary mb-2 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-body text-sm line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-xs text-muted-foreground gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-primary/5">
          <div className="container-axis">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Stay Informed
              </h2>
              <p className="text-body text-lg text-muted-foreground mb-8">
                Get the latest market insights, investment strategies, and industry updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-institutional">
                  Subscribe to Newsletter
                </Button>
                <Button size="lg" variant="outline">
                  View All Articles
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Insights;